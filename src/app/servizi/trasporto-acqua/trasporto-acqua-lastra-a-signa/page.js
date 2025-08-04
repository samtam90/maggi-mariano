import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Lastra a Signa",
  canonical: links.servizi["trasporto-acqua"]["lastra-a-signa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lastra a Signa", 
    locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"}  
});