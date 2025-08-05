import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Foiano in Valdichiana",
    canonical: links.autospurgo["foiano-in-valdichiana"],
});
export default withBaseProps({ 
    title: "Autospurgo Foiano in Valdichiana", 
    locationNames: {label: "Foiano in Valdichiana", href: "foiano-in-valdichiana"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
