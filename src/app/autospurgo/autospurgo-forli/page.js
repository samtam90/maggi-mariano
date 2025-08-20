import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Forlì",
    canonical: links.autospurgo["forli"],
});
export default withBaseProps({ 
    title: "Autospurgo Forlì", 
    locationNames: {label: "Forlì", href: "forli"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
