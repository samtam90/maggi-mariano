import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Paciano",
  canonical: links.servizi["pulizia-fognature"]["paciano"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Paciano", 
    locationNames: {label: "Paciano", href: "paciano"}  
});
