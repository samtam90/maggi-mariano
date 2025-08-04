import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Genova",
  canonical: links.servizi["trasporto-acqua"]["genova"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Genova", 
    locationNames: {label: "Genova", href: "genova"}  
});