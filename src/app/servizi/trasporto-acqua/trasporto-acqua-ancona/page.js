import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Ancona",
  canonical: links.servizi["trasporto-acqua"]["ancona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ancona", 
    locationNames: {label: "Ancona", href: "ancona"}  
});