import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Sogliano al Rubicone",
    canonical: links.autospurgo["sogliano-al-rubicone"],
});
export default withBaseProps({ 
    title: "Autospurgo Sogliano al Rubicone", 
    locationNames: {label: "Sogliano al Rubicone", href: "sogliano-al-rubicone"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
