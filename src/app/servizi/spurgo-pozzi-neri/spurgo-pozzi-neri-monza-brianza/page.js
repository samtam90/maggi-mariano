import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monza Brianza",
  canonical: links.servizi["spurgo-pozzi-neri"]["monza-brianza"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});