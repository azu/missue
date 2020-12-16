import * as chrono from "chrono-node";
import dayjs from "dayjs";

const customLang = (text: string): string => {
    return text
        .replace(/来週/, () => {
            return dayjs().add(1, "week").format("YYYY年MM月DD日");
        })
        .replace(/来月/, () => {
            return dayjs().add(1, "month").format("YYYY年MM月DD日");
        })
        .replace(/来年/, () => {
            return dayjs().add(1, "year").format("YYYY年MM月DD日");
        })
        .replace(/(\d+)週間後/, (_, week) => {
            return dayjs().add(Number(week), "week").format("YYYY年MM月DD日");
        })
        .replace(/([月火水木金土日])曜/, (_, day) => {
            switch (day) {
                case "月":
                    return "monday";
                case "火":
                    return "tuesday";
                case "水":
                    return "wednesday";
                case "木":
                    return "thursday";
                case "金":
                    return "friday";
                case "土":
                    return "saturday";
                case "日":
                    return "sunday";
                default:
                    return day;
            }
        });
};
const parseRemindComment = (comment: string): Date | undefined => {
    const remindCommand = /\/remind\s+(.+)/i;
    const match = comment.match(remindCommand);
    if (!match) {
        return;
    }
    const body = customLang(match[1] as string);
    const referenceDate = new Date();
    // https://github.com/wanasit/chrono#locales
    const langs = ["ja", "en"];
    for (const lang of langs) {
        // @ts-expect-error:
        const ret = chrono[lang].parseDate(body, referenceDate, { forwardDate: true });
        if (ret) {
            return ret;
        }
    }
    return;
};

/**
 * /remind 明日 教えて
 * /remind tomorrow
 *
 * output is unix time
 */
if (require.main) {
    const comment = process.argv[process.argv.length - 1].trim();
    const date = parseRemindComment(comment);
    if (!date) {
        console.log("Can not parsed", comment);
        process.exit(1);
    }
    if (process.argv.includes("--debug")) {
        console.log(date);
    } else {
        console.log(date.getTime());
    }
}
