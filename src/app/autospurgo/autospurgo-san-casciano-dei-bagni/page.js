import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo San Casciano dei Bagni",
    canonical: links.autospurgo["san-casciano-dei-bagni"],
});
export default withBaseProps({ 
    title: "Autospurgo San Casciano dei Bagni", 
    locationNames: {label: "San Casciano dei Bagni", href: "san-casciano-dei-bagni"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
