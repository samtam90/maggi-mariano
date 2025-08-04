import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri San Godenzo",
  canonical: links.servizi["spurgo-pozzi-neri"]["san-godenzo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"}  
});