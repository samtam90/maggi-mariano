import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Cuneo",
  canonical: links.servizi["trasporto-acqua"]["cuneo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"}  
});