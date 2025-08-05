import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Loro ciuffenna",
  canonical: links.servizi["disidratazione-fanghi"]["loro-ciuffenna"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Loro ciuffenna",
  locationNames: { label: "Loro ciuffenna", href: "loro-ciuffenna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
