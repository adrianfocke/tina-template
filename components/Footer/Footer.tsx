"use client";
import { Box, Container, Flex, Select } from "@radix-ui/themes";
import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import { languages, type Language } from "../../tina/templating/special-fields";
import type { FooterQuery } from "../../tina/__generated__/types";
import Text from "../Text/Text";
import Button from "../Button/Button";

const languageLabels: Record<Language, string> = {
  de: "Deutsch",
  en: "English",
};

export default function Footer(props: FooterQuery["footer"]) {
  const language = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage: string) => {
    document.cookie = `language=${newLanguage}; path=/; max-age=${
      60 * 60 * 24 * 365
    }; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <Box
      style={{
        borderTop: "1px solid var(--gray-6)",
        marginTop: "var(--space-6)",
      }}
      mx={props.settings?.marginX ?? "0"}
      mt={props.settings?.marginY ?? "0"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      <Container>
        <Flex justify={"between"} align={"center"}>
          <Flex gap={"4"} direction={"row"} display={"flex"} align={"center"}>
            {props.links?.map((link, index) => {
              return (
                <Text
                  key={index}
                  {...(link as any)}
                  style={{ background: "red", width: "20px" }}
                />
              );
            })}
            <Button
              content={{
                text_de: "Signal",
                text_en: "Signal",
              }}
              settings={{ align: "center", variant: "outline", textSize: "2" }}
            />
            <Button
              content={{
                text_de: "WhatsApp",
                text_en: "WhatsApp",
              }}
              settings={{ align: "center", variant: "outline", textSize: "2" }}
            />
          </Flex>
          <Select.Root value={language} onValueChange={handleLanguageChange}>
            <Select.Trigger
              aria-label="Select language"
              style={{
                borderRadius: "var(--radius-6)",
              }}
            />
            <Select.Content>
              {languages.map((lang) => (
                <Select.Item key={lang} value={lang}>
                  {languageLabels[lang]}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </Flex>
      </Container>
    </Box>
  );
}
