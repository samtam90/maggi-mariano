import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi San Giovanni Valdarno",
  canonical: links.servizi["centrifugazione-fanghi"]["san-giovanni-valdarno"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi San Giovanni Valdarno",
  locationNames: { label: "San Giovanni Valdarno", href: "san-giovanni-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
