import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Figline e Incisa Valdarno",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Figline e Incisa Valdarno", 
    locationNames: {label: "Figline e Incisa Valdarno", href: "figline-e-incisa-valdarno"}  
});