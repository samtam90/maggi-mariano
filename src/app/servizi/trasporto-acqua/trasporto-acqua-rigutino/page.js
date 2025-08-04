import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Rigutino",
  canonical: links.servizi["trasporto-acqua"]["rigutino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"}  
});