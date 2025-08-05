import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Loro ciuffenna",
  canonical: links.servizi["centrifugazione-fanghi"]["loro-ciuffenna"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Loro ciuffenna",
  locationNames: { label: "Loro ciuffenna", href: "loro-ciuffenna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
