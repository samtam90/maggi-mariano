import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Chiusi della Verna",
  canonical: links.servizi["trasporto-acqua"]["chiusi-della-verna"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"}  
});