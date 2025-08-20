import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Loro ciuffenna",
    canonical: links.autospurgo["loro-ciuffenna"],
});
export default withBaseProps({ 
    title: "Autospurgo Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
