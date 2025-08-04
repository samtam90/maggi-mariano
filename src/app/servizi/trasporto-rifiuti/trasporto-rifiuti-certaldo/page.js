import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Certaldo",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});