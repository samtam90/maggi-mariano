import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Castelfranco Piandiscò",
  canonical: links.servizi["centrifugazione-fanghi"]["castelfranco-piandisco"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Castelfranco Piandiscò",
  locationNames: { label: "Castelfranco Piandiscò", href: "castelfranco-piandisco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
