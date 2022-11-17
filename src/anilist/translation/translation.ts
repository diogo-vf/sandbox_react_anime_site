import Gtranslate from "@iamtraction/google-translate";
import { ITranslate } from ".";

export const translate = async ({ text, to, from }: ITranslate): Promise<string> => {
    let translatedText = await Gtranslate(text, { from, to });

    return translatedText.text
}