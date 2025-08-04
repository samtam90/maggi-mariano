import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Rigutino",
  canonical: links.servizi["spurgo-pozzi-neri"]["rigutino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"}  
});