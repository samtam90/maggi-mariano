import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castelfranco Piandiscò",
    canonical: links.autospurgo["castelfranco-piandisco"],
});
export default withBaseProps({ 
    title: "Autospurgo Castelfranco Piandiscò", 
    locationNames: {label: "Castelfranco Piandiscò", href: "castelfranco-piandisco"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
