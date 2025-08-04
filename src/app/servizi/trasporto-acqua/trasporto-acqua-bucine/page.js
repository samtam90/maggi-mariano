import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Bucine",
  canonical: links.servizi["trasporto-acqua"]["bucine"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bucine", 
    locationNames: {label: "Bucine", href: "bucine"}  
});