import { Box, RelativeBox } from "../../UI/Box";

interface LanguageSelectProps {
  label: string;
  options: string[];
  onChange: () => void;
}

const LanguageSelect : React.FC<LanguageSelectProps> = (props) => {
  const {label, options, onChange}= props
  return (<RelativeBox><Box></Box></RelativeBox>)
  
}
export default LanguageSelect