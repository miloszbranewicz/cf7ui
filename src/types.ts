type BaseAttributes = {
  name: string;
  className?: string;
  id?: string;
};

type TextFieldsAttributes = {
  required: boolean;
  defaultValue?: string;
  defaultValueAsPlaceholder?: boolean;
};

type FileFieldsAttributes = {
  fileSize: number;
  acceptedFileTypes: string[];
};

type RangeFieldsAttributes<T> = {
  min: T;
  max: T;
};

type Question = {
  question: string;
  answer: string;
};

type OptionsAttribute<T> = {
  options: T[];
};

export type TextField = BaseAttributes & TextFieldsAttributes;

export type EmailField = BaseAttributes & TextFieldsAttributes;

export type UrlField = BaseAttributes & TextFieldsAttributes;

export type TelField = BaseAttributes & TextFieldsAttributes;

export type RangeField = BaseAttributes &
  TextFieldsAttributes &
  RangeFieldsAttributes<number>;

export type DateField = BaseAttributes &
  TextFieldsAttributes &
  RangeFieldsAttributes<string>;

export type TextareaField = BaseAttributes & TextFieldsAttributes;

export type SelectField = BaseAttributes &
  Omit<TextFieldsAttributes, "defaultValue" | "defaultValueAsPlaceholder"> &
  OptionsAttribute<string> & {
    multiple: boolean;
    emptyOption: boolean;
  };

export type CheckboxField = BaseAttributes &
  OptionsAttribute<string> &
  Omit<TextFieldsAttributes, "defaultValue" | "defaultValueAsPlaceholder"> & {
    descriptionBefore: boolean;
    addLabels: boolean;
    multiple: boolean;
  };

export type RadioField = BaseAttributes &
  OptionsAttribute<string> & {
    descriptionBefore: boolean;
    addLabels: boolean;
  };

export type TermsField = BaseAttributes & {
  optional: boolean;
  description: string;
};

export type FileField = BaseAttributes &
  Omit<TextFieldsAttributes, "defaultValue" | "defaultValueAsPlaceholder"> &
  FileFieldsAttributes;

export type QuizField = BaseAttributes & {
  questions: Question[];
};

export type SubmitButton = Omit<BaseAttributes, "name"> & {
  text: string;
};

export type Fields =
  | TextField
  | EmailField
  | UrlField
  | TelField
  | RangeField
  | DateField
  | TextareaField
  | SelectField
  | CheckboxField
  | RadioField
  | TermsField
  | FileField
  | QuizField
  | SubmitButton;
