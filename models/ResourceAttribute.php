<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "resource_attribute".
 *
 * @property integer $attribute_id
 * @property string $name
 *
 * @property AttributeClassView[] $attributeClassViews
 * @property Parameter[] $parameters
 */
class ResourceAttribute extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'resource_attribute';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['name', 'required'],
            // ['name', 'unique', 'message' => 'Такий атрибут уже існує'],
            ['name', 'string', 'max' => 60]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'attribute_id' => 'Attribute ID',
            'name' => 'Name',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAttributeClassViews()
    {
        return $this->hasMany(AttributeClassView::className(), ['attribute_id' => 'attribute_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getParameters()
    {
        return $this->hasMany(Parameter::className(), ['attribute_id' => 'attribute_id']);
    }

    public static function findByAttributeName($attribute_name)
    {
        return static::findOne(['name' => $attribute_name]);
    }
    public static function findByAttributeId($attribute_id)
    {
        return static::findOne(['attribute_id' => $attribute_id]);
    }
}
