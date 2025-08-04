import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Umbertide",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"}  
});