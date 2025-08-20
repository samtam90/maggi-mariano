import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Gualdo Cattaneo",
    canonical: links.autospurgo["gualdo-cattaneo"],
});
export default withBaseProps({ 
    title: "Autospurgo Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
