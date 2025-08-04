import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Castiglion Fiorentino",
  canonical: links.servizi["trasporto-acqua"]["castiglion-fiorentino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});