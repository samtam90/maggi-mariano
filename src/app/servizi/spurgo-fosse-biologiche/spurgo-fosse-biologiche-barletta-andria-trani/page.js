import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Barletta-Andria-Trani",
  canonical: links.servizi["spurgo-fosse-biologiche"]["barletta-andria-trani"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Barletta-Andria-Trani", 
    locationNames: {label: "Barletta-Andria-Trani", href: "barletta-andria-trani"}  
});
