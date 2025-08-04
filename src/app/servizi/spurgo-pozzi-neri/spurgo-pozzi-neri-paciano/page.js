import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Paciano",
  canonical: links.servizi["spurgo-pozzi-neri"]["paciano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Paciano", 
    locationNames: {label: "Paciano", href: "paciano"}  
});