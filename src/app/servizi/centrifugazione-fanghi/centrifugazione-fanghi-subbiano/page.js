import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Subbiano",
  canonical: links.servizi["centrifugazione-fanghi"]["subbiano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Subbiano",
  locationNames: { label: "Subbiano", href: "subbiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
