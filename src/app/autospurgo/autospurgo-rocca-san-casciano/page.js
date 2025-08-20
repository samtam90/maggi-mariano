import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Rocca San Casciano",
    canonical: links.autospurgo["rocca-san-casciano"],
});
export default withBaseProps({ 
    title: "Autospurgo Rocca San Casciano", 
    locationNames: {label: "Rocca San Casciano", href: "rocca-san-casciano"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
