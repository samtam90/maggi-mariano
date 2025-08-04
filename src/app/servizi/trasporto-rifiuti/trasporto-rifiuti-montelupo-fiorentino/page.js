import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montelupo Fiorentino",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"}  
});