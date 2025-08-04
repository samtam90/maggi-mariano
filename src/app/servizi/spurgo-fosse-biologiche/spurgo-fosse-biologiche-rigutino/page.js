import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rigutino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rigutino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"}  
});
