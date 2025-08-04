import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri San Giustino",
  canonical: links.servizi["spurgo-pozzi-neri"]["san-giustino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"}  
});