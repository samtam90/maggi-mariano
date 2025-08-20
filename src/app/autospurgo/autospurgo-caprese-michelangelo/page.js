import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Caprese Michelangelo",
    canonical: links.autospurgo["caprese-michelangelo"],
});
export default withBaseProps({ 
    title: "Autospurgo Caprese Michelangelo", 
    locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
