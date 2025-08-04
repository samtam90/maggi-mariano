import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Monza Brianza",
  canonical: links.servizi["trasporto-acqua"]["monza-brianza"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});