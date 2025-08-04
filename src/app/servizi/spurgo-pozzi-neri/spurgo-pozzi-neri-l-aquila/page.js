import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri L'Aquila",
  canonical: links.servizi["spurgo-pozzi-neri"]["l-aquila"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});