import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lastra a Signa",
  canonical: links.servizi["trasporto-rifiuti"]["lastra-a-signa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lastra a Signa", 
    locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"}  
});