import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Montespertoli",
  canonical: links.servizi["trasporto-acqua"]["montespertoli"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montespertoli", 
    locationNames: {label: "Montespertoli", href: "montespertoli"}  
});