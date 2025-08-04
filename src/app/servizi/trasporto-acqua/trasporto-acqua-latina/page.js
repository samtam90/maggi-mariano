import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Latina",
  canonical: links.servizi["trasporto-acqua"]["latina"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Latina", 
    locationNames: {label: "Latina", href: "latina"}  
});