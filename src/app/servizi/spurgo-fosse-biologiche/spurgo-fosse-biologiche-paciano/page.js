import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Paciano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["paciano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Paciano", 
    locationNames: {label: "Paciano", href: "paciano"}  
});
