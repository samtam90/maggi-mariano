import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Padova",
    canonical: links.autospurgo["padova"],
});
export default withBaseProps({ 
    title: "Autospurgo Padova", 
    locationNames: {label: "Padova", href: "padova"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["padova"],
        name: "Padova",
    }),
});
