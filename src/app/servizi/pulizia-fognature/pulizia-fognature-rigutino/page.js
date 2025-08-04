import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Rigutino",
  canonical: links.servizi["pulizia-fognature"]["rigutino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"}  
});
