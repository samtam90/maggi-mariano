import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Monza Brianza",
  canonical: links.servizi["pulizia-fognature"]["monza-brianza"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});
