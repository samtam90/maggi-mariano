import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Verona",
  canonical: links.servizi["trasporto-acqua"]["verona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Verona", 
    locationNames: {label: "Verona", href: "verona"}  
});