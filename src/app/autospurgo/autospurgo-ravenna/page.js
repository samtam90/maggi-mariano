import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Ravenna",
    canonical: links.autospurgo["ravenna"],
});
export default withBaseProps({ 
    title: "Autospurgo Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["ravenna"],
        name: "Ravenna",
    }),
});
