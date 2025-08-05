import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Subbiano",
  canonical: links.servizi["disidratazione-fanghi"]["subbiano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Subbiano",
  locationNames: { label: "Subbiano", href: "subbiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
