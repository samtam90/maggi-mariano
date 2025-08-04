import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rigutino",
  canonical: links.servizi["trasporto-rifiuti"]["rigutino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"}  
});