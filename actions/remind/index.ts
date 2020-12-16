import * as chrono from "chrono-node";

const parseRemindComment = (comment: string): Date | undefined => {
    const remindCommand = /\/remind\s+(.+)/i;
    const match = comment.match(remindCommand);
    if (!match) {
        return;
    }
    const body = match[1] as string;
    const referenceDate = new Date();
    // https://github.com/wanasit/chrono#locales
    const langs = ["ja", "en"];
    for (const lang of langs) {
        try {
            // @ts-expect-error:
            return chrono[lang].parseDate(body, referenceDate, { forwardDate: true });
        } catch {
            return;
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
    console.log(date.getTime());
}
